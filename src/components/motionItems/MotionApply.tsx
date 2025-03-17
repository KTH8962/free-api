import { useState } from "react"
import styles from "./MotionApply.module.scss"
import { motion, AnimatePresence, useMotionValue } from "framer-motion"

function MotionApply() {
  const mtLists = [1, 2, 3, 4]
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
        <div className="buttons">
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
        {visibleIndex}
      </div>
      <div className={styles.motion__box}>3</div>
    </div>
  )
}

export default MotionApply
