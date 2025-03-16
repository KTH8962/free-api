import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState } from "react"

function CheckItem() {
  // AnimatedComponent
  const blockVariants = {
    initial: {
      rotate: 0,
      scale: 1,
    }, // 처음 컴포넌트 나타날 때 상태
    target: {
      rotate: 270,
    }, // 애니메이션 끝날 때 상태
    hover: { scale: 1.2 },
  }
  const rotate = useMotionValue(0) // 변수이름 달라도 됨, 애니메이션 상태 구독
  const scale = useTransform(rotate, [0, 270], [0, 1]) // 변수이름 달라도 된다.
  const [clicked, setClicked] = useState(false)
  const buttonVariants = {
    // function으로 정의하는 모습
    hover: (clicked: boolean) => ({
      // 클릭된 버튼은 scale이 커지지 않는다.
      scale: clicked ? 1 : 1.5,
    }),
    pressed: {
      scale: 0.5,
    },
    rest: {
      scale: 1,
    },
  }
  return (
    <>
      <motion.div
        style={{
          background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
          height: "100px",
          width: "100px",
          borderRadius: "10px",
          margin: "100px",
          rotate, // rotate: rotate 와 동일
          scale, // scale : scale 과 동일
        }}
        variants={blockVariants}
        initial="initial"
        animate="target"
        whileHover="hover"
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
      />
      <motion.button
        initial="rest"
        whileHover="hover" // hover상태 일 때 hover animation발생
        whileTap="pressed"
        variants={buttonVariants}
        custom={clicked} // custom을 통해 값을 전달 할 수 있다.
        onClick={() => setClicked(!clicked)}
      >
        Click me!
      </motion.button>
      <div style={{ height: "70vh" }}>중간여백</div>
      <motion.div
        style={{
          height: "500px",
          backgroundColor: "var(--color-green)",
        }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          x: { duration: 1 },
        }}
      >
        테스트
      </motion.div>
    </>
  )
}

export default CheckItem
