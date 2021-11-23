import AboutImageWords from "../components/AboutImageWords/AboutImageWords"
import ImageClient from "../components/ImageClient/ImageClient"
import notebook from "./../assets/images/notebook.png"

export const aboutStore = [
  {
    id: 1,
    title: "кто",
    text: '- мы команда людей, увлеченных вебом. Мы стремимся сделать современные работающие сайты доступными для бизнеса с небольшим бюджетом. Наша любимая работа- давать вторую жизнь "слегка" устаревшим сайтам. Благодаря редизайну и изменению функционала в соответствии с последними трендами и технологиями, даже 20-летний старичок-сайт начнёт новую интерактивную жизнь.',
    image: <AboutImageWords />,
  },
  {
    id: 2,
    title: "зачем",
    text: "Сайт - это окно в мир для Вашего бизнеса. Если Ваш сайт создавался 3,5, а может и более лет назад, то Вы скорее всего и сами замечали, что некоторые, а возможно и многие элементы выглядят устаревшими, не хватает динамики, интерактивности...  И, конечно же, все эти факторы не прибавляют привлекательности в глазах Ваших потенциальных клиентов. Современный пользователь уже привык к яркому, динамичному контенту сайтов. Да и сайт сейчас- это не просто страница с информацией. Это скорее удобное и привлекательное приложение, отзывчиво реагирующее на действия посетителя. Создавать именно такие приложения - наша основная миссия.",
    image: (
      <img
        src={notebook}
        alt="notebook"
        style={{ position: "absolute", right: "-2rem" }}
      />
    ),
  },
  {
    id: 3,
    title: "для кого",
    text: "Наши клиенты - активные люди, имеющие небольшой бизнес. Мы прекрасно понимаем, насколько сложно выделить из бюджета средства на продвижение в интернете. Не так важно, имеете ли вы небольшое производство или занимаетес фотографией, работаете в сфере питания или торговли - современный сайт с грамотно разработанным дизайном и чёткой seo-оптимизацией улучшит Ваш имидж в глазах клиента и поднимет на фоне конкурентов.",
    image: <ImageClient />,
  },
]