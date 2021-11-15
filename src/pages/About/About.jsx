import React from "react"
import restarta from "./../../assets/images/restarta.png"
import { Col, Row, Tabs, Tab } from "react-bootstrap"
import classes from "./About.module.css"
import notebook from "./../../assets/images/notebook.png"
import AboutImageWords from "../../components/AboutImageWords/AboutImageWords"
import client1 from "./../../assets/images/client1.png"
import client2 from "./../../assets/images/client2.png"
import client3 from "./../../assets/images/client3.png"

const About = () => {
  return (
    <Row className={classes.about} id="about">
      <Col>
        <h3> о нас</h3>
        <img src={restarta} alt="Restart-A" className={classes.image} />

        <Tabs
          defaultActiveKey="about"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="about" title="кто мы" className={classes.tabContent}>
            <span className={classes.desc1}>
              - мы команда людей, увлеченных вебом.<br></br> Мы стремимся
              сделать современные работающие сайты доступными для бизнеса с
              небольшим бюджетом.<br></br> Наша любимая работа- давать вторую
              жизнь "слегка" устаревшим сайтам. Благодаря редизайну и изменению
              функционала в соответствии с последними трендами и технологиями,
              даже 20-летний старичок-сайт начнёт новую интерактивную жизнь.
            </span>
            <div className={classes.words}>
              <AboutImageWords />
            </div>
          </Tab>
          <Tab eventKey="reasons" className={classes.tabContent} title="зачем">
            <span className={classes.desc2}>
              Сайт - это окно в мир для Вашего бизнеса. <br></br>Если Ваш сайт
              создавался 3,5, а может и более лет назад, то Вы скорее всего и
              сами замечали, что некоторые, а возможно и многие элементы
              выглядят устаревшими, не хватает динамики, интерактивности...
              <br></br>
              И, конечно же, все эти факторы не прибавляют привлекательности в
              глазах Ваших потенциальных клиентов.<br></br> Современный
              пользователь уже привык к яркому, динамичному контенту сайтов. Да
              и сайт сейчас- это не просто страница с информацией. Это скорее
              удобное и привлекательное приложение, отзывчиво реагирующее на
              действия посетителя. <br></br>
              Создавать именно такие приложения - наша основная миссия.
            </span>
            <img src={notebook} alt="notebook" className={classes.note} />
          </Tab>
          <Tab eventKey="clients" title="для кого" className={classes.desc1}>
            <span>
              наши клиенты - активные люди, имеющие небольшой бизнес. Мы
              прекрасно понимаем, насколько сложно выделить из бюджета средства
              на продвижение в интернете. Не так важно, имеете ли вы небольшое
              производство или занимаетес фотографией, работаете в сфере питания
              или торговли - современный сайт с грамотно разработанным дизайном
              и чёткой seo-оптимизацией улучшит Ваш имидж в глазах клиента и
              поднимет на фоне конкурентов.
            </span>

            <div className={classes.clients}>
              <img src={client1} alt="photo1" className={classes.client} />
              <img src={client2} alt="photo2" className={classes.client} />
              <img src={client3} alt="photo3" className={classes.client} />
            </div>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  )
}

export default About
