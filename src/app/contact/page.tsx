import { Metadata } from 'next';
// import ContactForm from '@/components/project/ContactForm';

export const metadata: Metadata = {
  title: '연락하기 - Portfolio',
  description: '문의사항이 있으시면 연락주세요.',
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-12 dark:bg-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            연락하기
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            프로젝트 문의나 협업 제안이 있으시면 언제든지 연락주세요.
          </p>
        </div>

        {/* Contact Form */}
        {/* <ContactForm /> */}

        {/* Additional Info */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Response Time */}
          <div className="card text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-green-100 p-4 dark:bg-green-900">
                <svg
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              응답 시간
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              보통 24시간 이내 답변
            </p>
          </div>

          {/* Email */}
          <div className="card text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <svg
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              이메일
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              hatssarjy@gmail.com
            </p>
          </div>

          {/* Instagram */}
          <div className="card text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-pink-100 p-4 dark:bg-pink-900">
                <svg
                  className="h-6 w-6 text-pink-600 dark:text-pink-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Instagram
            </h3>
            <a
              href="https://instagram.com/kim_sort307"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 dark:text-pink-400"
            >
              @kim_sort307
            </a>
          </div>

          {/* Linktr.ee */}
          <div className="card text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-green-100 p-4 dark:bg-green-900">
                <svg
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 5.85343V0H13.5108V5.85343ZM10.038 16.16H13.5108V24H10.038V16.16Z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Linktr.ee
            </h3>
            <a
              href="https://linktr.ee/sort307"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 dark:text-green-400"
            >
              linktr.ee/sort307
            </a>
          </div>

          {/* GitHub */}
          <div className="card text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-gray-100 p-4 dark:bg-gray-700">
                <svg
                  className="h-6 w-6 text-gray-900 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              GitHub
            </h3>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              github.com/kimjungyeol
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
