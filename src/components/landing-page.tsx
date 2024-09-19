'use client'

import { useState, useEffect } from 'react'
import { ArrowDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'how-it-works', 'testimonials', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg" alt="AIPilotSmarteasy 로고" width={40} height={40} />
            <span className="text-xl font-bold text-blue-600">AIPilotSmarteasy</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            {['features', 'how-it-works', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium ${
                  activeSection === item ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item === 'features' && '기능'}
                {item === 'how-it-works' && '작동 방식'}
                {item === 'testimonials' && '고객 후기'}
                {item === 'contact' && '문의하기'}
              </button>
            ))}
          </nav>
          <button
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['features', 'how-it-works', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-xl font-medium text-gray-600 hover:text-blue-600"
              >
                {item === 'features' && '기능'}
                {item === 'how-it-works' && '작동 방식'}
                {item === 'testimonials' && '고객 후기'}
                {item === 'contact' && '문의하기'}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10 space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AIPilotSmarteasy로 워크플로우를 강화하세요
            </h1>
            <p className="text-xl md:text-2xl">AI 기반 협업으로 업무 효율성을 높이세요</p>
            <button
              onClick={() => scrollToSection('features')}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              지금 다운로드
            </button>
          </div>
          <ArrowDown
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
            size={32}
          />
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🎨', title: '작업 설계 생성', description: '상세한 작업 명세를 통한 작업 설계 생성' },
                { icon: '🤖', title: '다양한 에이전트 지원', description: '다양한 AI 에이전트를 활용한 작업 수행' },
                { icon: '🔄', title: '워크플로우 자동화', description: '반복적인 작업을 자동화하여 효율성 향상' },
              ].map((feature, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">작동 방식</h2>
            <div className="max-w-3xl mx-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="AIPilotSmarteasy 작동 방식"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">고객 후기</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: '김철수', role: '프로젝트 매니저', comment: 'AIPilotSmarteasy로 팀 생산성이 50% 향상되었습니다.' },
                { name: '이영희', role: '마케팅 디렉터', comment: '복잡한 캠페인 관리가 훨씬 쉬워졌어요.' },
                { name: '박지성', role: '소프트웨어 개발자', comment: '반복적인 코딩 작업을 자동화하여 시간을 절약했습니다.' },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={`/placeholder.svg?text=${testimonial.name.charAt(0)}&width=40&height=40`}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">문의하기</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl mb-8">
                AIPilotSmarteasy에 대해 더 알고 싶으시거나 구매 문의가 있으신가요? 언제든 연락 주세요.
              </p>
              <p className="text-2xl font-semibold mb-4">이메일: contact@aipilot.com</p>
              <Link
                href="https://www.aipilot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                웹사이트 방문하기
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 AIPilotSmarteasy. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-blue-400">
                개인정보 처리방침
              </Link>
              <Link href="/terms" className="hover:text-blue-400">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}