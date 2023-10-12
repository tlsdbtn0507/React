import { useContext, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";

import { ChallengesContext } from "../store/challenges-context.jsx";
import Modal from "./Modal.jsx";
import images from "../assets/images.js";

export default function NewChallenge({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  const [state, animate] = useAnimate();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addChallenge } = useContext(ChallengesContext);

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };

    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim() ||
      !challenge.image
    ) {
      animate(
        "input,textarea",
        { x: [-10, 0, 10] },
        { type: "spring", duration: 0.25 }
      );
      //animate함수안에 html태그를 넣어도 되고 css class를 넣어도 됨
      return;
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit} ref={state}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        <motion.ul
          id="new-challenge-images"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          //하위 컴포넌트의 애니메이션 delay를 줌 staggerChildren의 값은 변환 속도, 낮을 수록 빠름
        >
          {images.map((image) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: [0.8, 1.5, 1] }, //배열의 순서에 따라 사이즈 조절 가능
              }}
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? "selected" : undefined}
              // exit="visible"
              // exit이 없으면 이 컴포넌트의 부모인 modal에서 hidden으로 바뀔때 (없어질 때) 하위 컴포넌트도 hidden속성이 적용되어
              // 이 컴포넌트의 애니메이션이 다 적용 되고 모달이 사라지는 이슈가 있어서 exit을 넣어야함

              //하지만 variants에서 쓴 값을 그대로 넣으면 애니 적용이 안되기 때문에
              exit={{ opacity: 1, scale: 1 }} //코드를 중복해서 써야함
              transition={{ type: "spring" }}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>

        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}
