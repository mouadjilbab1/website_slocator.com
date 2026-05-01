import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      Home: 'Home',
      About: 'About',
      Solutions: 'Solutions',
      Contact: 'Contact',
      Blog: 'Blog',
      Signup: 'Signup',
      'Get Report': 'Get Report',
      // أضف أي نصوص أخرى هنا لاحقاً
    },
  },
  ar: {
    translation: {
      Home: 'الرئيسية',
      About: 'من نحن',
      Solutions: 'حلولنا',
      Contact: 'اتصل بنا',
      Blog: 'المدونة',
      Signup: 'تسجيل جديد',
      'Get Report': 'استخراج تقرير',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // اللغة الافتراضية
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
