import { useState } from "react"
import styles from "./MotionApply.module.scss"
import { motion, AnimatePresence, useMotionValue } from "framer-motion"
//import Popup from "@components/popup/Popup"

function MotionApply() {
  const mtLists = [1, 2, 3, 4]
  /* section2 */
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [visibleIndex, setVisibleIndex] = useState(0)
  const [xValue, setXValue] = useState(0)
  const x = useMotionValue(xValue)
  const slides = [
    { id: 0, content: "0", background: "skyblue" },
    { id: 1, content: "1", background: "beige" },
    { id: 2, content: "2", background: "red" },
    { id: 3, content: "3", background: "black" },
    { id: 4, content: "4", background: "purple" },
  ]
  const showNextSlide = () => {
    setDirection("next")
    setVisibleIndex((prev) =>
      prev === slides.length - 1 ? slides.length - 1 : prev + 1
    )
  }
  const showPrevSlide = () => {
    setDirection("prev")
    setVisibleIndex((prev) => (prev === 0 ? 0 : prev - 1))
  }
  const slideVariants = {
    hidden: (direction: "next" | "prev") => ({
      x: direction === "next" ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: (direction: "next" | "prev") => ({
      x: direction === "next" ? -500 : 500,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
  }
  const bgColor = slides[visibleIndex].background
  /* //section2 */
  const rides = [
    {
      id: 0,
      src: "/assets/images/rides_01.jpg",
      name: "하이롤러",
      desc: `하늘을 나는 두 대의 우주선이 서로 다른 방향으로 회전을 시작합니다.
한 바퀴~ 두 바퀴~ 으아아~~ 하늘에 거꾸로 매달리는 아찔한 기분.`,
    },
    {
      id: 1,
      src: "/assets/images/rides_02.jpg",
      name: "도깨비 바람",
      desc: `놀이기구가 엄청난 속도로 자전과 공전을 한다고?? 
휭~ 휭~ 바람을 가르는 소리가 더 공포스럽게 느껴지는 공중에서 사람들을 마구 떨어뜨려 버릴 것 같은 무시무시한 "도깨비바람"! 
눈 앞의 사람들이 거꾸로 보인다고요? 공포의 끝을 느끼고 계시는군요.
그러나, 아직!! 도깨비바람의 하이라이트! 공중회전이 남았습니다. 
공중에서 6바퀴를 연속으로 도는 아찔한 스릴! 심장이 약한 분들은 눈을 감으세요. 
하늘이 쏟아져 내리는 것 같거든요.`,
    },
    {
      id: 2,
      src: "/assets/images/rides_03.jpg",
      name: "빅회전목마",
      desc: `이것 없으면 놀이공원이 아니다!
놀이공원의 절대적 상징물 ‘회전목마' 너무나도 예쁜 동화의 세계에 있는 듯한 느낌!
난 하얀 말, 엄마, 아빠는 검정말, 할머니, 할아버지는 꽃마차~온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!`,
    },
    {
      id: 3,
      src: "/assets/images/rides_04.jpg",
      name: "킹바이킹",
      desc: `가족, 친구들과 함께 삼삼오오 짝을 이루어 배의 양쪽으로 나누어 타고 소리쳐 보세요. 스릴과 모험에 대해서는 더 이상 말이 필요 없는 국민적인 놀이기구!
배가 뒤집힐 듯 말 듯하게 앞, 뒤로 급상승, 급하강을 반복하는 아슬아슬하고 짜릿짜릿한 쾌감을 느껴 보세요. `,
    },
    {
      id: 4,
      src: "/assets/images/rides_05.jpg",
      name: "샷드롭",
      desc: `하늘과 땅을 헤짚는 재미가 있다! 천당과 지옥을 넘나드는 초강력 타임머신! WOW! 이런 짜릿한 느낌 처음이야!
지상 52m 공중으로 로켓처럼 쏘아 올려(Shot) 공처럼 빠르게 상하로 튀겼다가(Bounce) 다시 끌어올려, 순식간에 떨어뜨리는(Drop) 아찔한 놀이기구로 지금까지 어디에서도 느껴보지 못했던 짜릿한 흥분과 감동을 느낄 수 있습니다.

탈 때마다 다른 방향으로 앉아 보세요. 느낌이 정말 다르답니다.
이쪽으로 보면 아름다운 청계산이, 저쪽으로 보면 서울랜드의 모든 풍경이 한눈에~
자~! 긴장을 푸시고, 샷드롭 카운트다운 합니다. 힘 빼세요!
꼭! 스카이X 타기 전에 이용하세요.`,
    },
    {
      id: 5,
      src: "/assets/images/rides_06.jpg",
      name: "또봇트레인",
      desc: `TV에서만 보았던 또봇 에볼루션 Y를 직접 놀이기구로 만나고~ 실제 크기(6M) 또봇 에볼루션 X와 사진 촬영도 찰칵!`,
    },
    {
      id: 6,
      src: "/assets/images/rides_07.jpg",
      name: "스카이엑스",
      desc: `하늘을 날고 싶다! 스카이다이빙을 능가하는 초강력 제트엔진!
스카이X는 스포츠적인 요소와 재미를 겸비한 놀이시설로 번지점프의 스릴과 스카이다이빙의 짜릿한 흥미를 동시에 경험할 수 있습니다.
50m 상공에 다다른 후 마음을 가다듬고 하강 손잡이를 당기면 급하강!
스카이X를 이용하시는 분은 비행궤도의 최고 저점 부근의 시속 60km에서 최대 85km로 신속하게 던져지는 듯한 느낌과 함께 흥미진진한 지표면의 돌진 현상과 함께 저항할 수 없는 바람의 위력까지 함께 느끼게 됩니다.`,
    },
    {
      id: 7,
      src: "/assets/images/rides_08.jpg",
      name: "베스트키즈",
      desc: `TV쏙 키즈랜드, 타워놀이터, 정글놀이터, 상상작업실, 키즈모션플레이, 파도슬라이드 등 아이들이 마음껏 뛰놀 수 있는 베스트키즈!`,
    },
  ]
  const handlePop = (id: number) => {
    console.log(rides[id])
  }
  return (
    <div className={styles.motion}>
      <div className={styles.motion__box}>
        <ul className={styles.motion__list}>
          {mtLists.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                y: {
                  duration: 1,
                  delay: index * 0.2,
                },
                delay: index * 0.2,
              }}
            >
              <p>{item}</p>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className={styles.motion__box}>
        <motion.div className={styles.slider} animate={{ background: bgColor }}>
          <AnimatePresence custom={direction}>
            {slides.map((item, index) =>
              index === visibleIndex ? (
                <motion.div
                  key={item.id}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={direction}
                  className={styles.slide}
                  drag="x"
                  dragSnapToOrigin
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 50 }}
                  whileTap={{ scale: 0.9 }}
                  dragConstraints={{
                    left: -window.innerWidth,
                    right: window.innerWidth,
                  }}
                  dragElastic={false}
                  onDrag={(event, info) => {
                    setXValue(info.point.x)
                    x.set(info.offset.x)
                  }}
                  onDragEnd={(event, info) => {
                    if (
                      info.offset.x < 0 &&
                      Math.abs(info.offset.x) >= window.innerWidth / 4
                    ) {
                      showNextSlide()
                    } else if (
                      info.offset.x > 0 &&
                      info.offset.x >= window.innerWidth / 4
                    ) {
                      showPrevSlide()
                    }
                    setXValue(info.point.x)
                    x.set(info.point.x)
                  }}
                >
                  {item.content}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </motion.div>
        <div className={styles.buttons}>
          <button
            type="button"
            className="prev"
            onClick={showPrevSlide}
            disabled={visibleIndex === 0}
          >
            ᴘʀᴇᴠ
          </button>
          <button
            type="button"
            className="next"
            onClick={showNextSlide}
            disabled={visibleIndex === slides.length - 1}
          >
            ɴᴇxᴛ
          </button>
        </div>
      </div>
      <div
        className={styles.motion__box}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={styles.motion__rides}>
          {rides.map((item) => (
            <button
              type="button"
              key={item.id}
              className={styles.motion__rides__item}
              onClick={() => {
                handlePop(item.id)
              }}
            >
              <picture className={styles.motion__rides__item__img}>
                <img src={item.src} alt={`${item.name} 이미지`} />
              </picture>
              <span className={styles.motion__rides__item__desc}>
                {item.name}
              </span>
            </button>
          ))}
          {/* <Popup /> */}
        </div>
      </div>
    </div>
  )
}

export default MotionApply
