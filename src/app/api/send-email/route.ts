import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // 입력 검증
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '유효한 이메일 주소를 입력해주세요.' },
        { status: 400 }
      );
    }

    // Nodemailer 설정
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // 이메일 옵션
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Gmail 인증 계정 사용 (Gmail 정책)
      to: process.env.EMAIL_USER, // 수신자는 hatssarjy@gmail.com 고정
      replyTo: `"${name}" <${email}>`, // 답장 시 사용자의 이메일로 전송
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            새로운 문의가 도착했습니다
          </h2>

          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>이름:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>이메일:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>제목:</strong> ${subject}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">메시지 내용</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
            <p>이 메시지는 포트폴리오 웹사이트의 연락하기 폼을 통해 전송되었습니다.</p>
            <p>발신자에게 답장하려면 '답장' 버튼을 클릭하세요.</p>
          </div>
        </div>
      `,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: '이메일이 성공적으로 전송되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: '이메일 전송에 실패했습니다. 나중에 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}
