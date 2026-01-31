import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        blogTitle: "Из блога",

        blog: {
          card1Title: "40 000 баллов PLUS за каждый заказ по промокоду",
          card1Text: "Каталог",

          card2Title: "Найти товары",
          card2Text: "Распродажа",

          card3Title: "Корзинка",
          card3Text: "Из-за рубежа",

          card4Title: "Одежда",
          card4Text: "Товары для дома",

          card5Title: "Красота",
          card5Text: "Электроника",

          card6Title: "",
          card6Text: ""
        },

        startLearning: "Начать обучение",
        subscribeText: "Получайте последние статьи и ресурсы от Morphocode",
        emailPlaceholder: "Введите email",
        subscribe: "Подписаться",

        footer: {
          academy: "Академия",
          works: "Работы",
          fromBlog: "Из блога",
          getToKnow: "Узнайте нас"
        },

        header: {
          navAcademy: "Академия",
          navBlog: "Блог",
          navWork: "Работы",
          navContact: "Контакты",
          navAbout: "О нас",

          heroTitle: "Исследуем города через анализ данных и визуализацию",
          heroText: "Morphocode — студия дизайна и разработки, визуализирующая городские данные.",

          bottomTitle: "Мы исследуем, проектируем и разрабатываем",
          bottomText: "Наши проекты — от интерактивных карт до кастомных инструментов."
        }
      }
    },

    en: {
      translation: {
        blogTitle: "From the blog",

        blog: {
          card1Title: "40,000 PLUS points for every order with promo code ",
          card1Text: "Сatalog",

          card2Title: "Find products",
          card2Text: "Sale",

          card3Title: "Korzinka",
          card3Text: "From abroad",

          card4Title: "Cloth",
          card4Text: "Household goods",

          card5Title: "Beauty",
          card5Text: "Electronics",

          card6Title: "",
          card6Text: ""
        },

        startLearning: "Start Learning",
        subscribeText: "Get the latest articles and free resources from Morphocode",
        emailPlaceholder: "Enter your email",
        subscribe: "Subscribe",

        footer: {
          academy: "Academy",
          works: "Work",
          fromBlog: "From the blog",
          getToKnow: "Get to know us"
        },

        header: {
          navAcademy: "Academy",
          navBlog: "Blog",
          navWork: "Work",
          navContact: "Contact",
          navAbout: "About",

          heroTitle: "Exploring cities through data analysis and visualization",
          heroText: "Morphocode is a design and development studio focused on urban data.",

          bottomTitle: "We research, design, and develop",
          bottomText: "Our projects range from interactive maps to custom tools."
        }
      }
    },

    uz: {
      translation: {
        blogTitle: "Blogdan",

        blog: {
          card1Title: "Promo-kod bilan har bir buyurtma uchun 40 000 PLUS ball",
          card1Text: "Katalog",

          card2Title: "Mahsulotlarni topingi",
          card2Text: "Sotuv",

           card3Title: "Korzinka",
          card3Text: "Chet eldan",

          card4Title: "Kiyim",
          card4Text: "Uy-ro'zg'or buyumlari",

          card5Title: "Go'zallik",
          card5Text: "Elektronika",

          card6Title: "",
          card6Text: ""
        },

        startLearning: "O‘rganishni boshlash",
        subscribeText: "Morphocode’dan so‘nggi maqola va resurslarni oling",
        emailPlaceholder: "Email kiriting",
        subscribe: "Obuna bo‘lish",

        footer: {
          academy: "Akademiya",
          works: "Ishlar",
          fromBlog: "Blogdan",
          getToKnow: "Biz bilan tanishing"
        },

        header: {
          navAcademy: "Akademiya",
          navBlog: "Blog",
          navWork: "Ishlar",
          navContact: "Aloqa",
          navAbout: "Biz haqimizda",

          heroTitle: "Shaharlarni ma’lumotlar tahlili va vizualizatsiya orqali o‘rganamiz",
          heroText: "Morphocode — shahar ma’lumotlari bilan ishlovchi dizayn va dasturlash studiyasi.",

          bottomTitle: "Biz tadqiq qilamiz, loyihalaymiz va ishlab chiqamiz",
          bottomText: "Loyihalarimiz interaktiv xaritalardan maxsus vositalargacha."
        }
      }
    }
  },
  lng: "ru",
  fallbackLng: "en"
});

export default i18n;
