import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ChallengesContext } from "../store/challenges-context.jsx";

export default function ChallengeItem({
  challenge,
  onViewDetails,
  isExpanded,
}) {
  const { updateChallengeStatus } = useContext(ChallengesContext);

  const formattedDate = new Date(challenge.deadline).toLocaleDateString(
    "en-US",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  function handleCancel() {
    updateChallengeStatus(challenge.id, "failed");
  }

  function handleComplete() {
    updateChallengeStatus(challenge.id, "completed");
  }

  return (
    <motion.li layout>
      {/* layout: 리스트가 사라질때 자연스럽게 올라오게함 */}
      <article className="challenge-item">
        <header>
          <img {...challenge.image} />
          <div className="challenge-item-meta">
            <h2>{challenge.title}</h2>
            <p>Complete until {formattedDate}</p>
            <p className="challenge-item-actions">
              <button onClick={handleCancel} className="btn-negative">
                Mark as failed
              </button>
              <button onClick={handleComplete}>Mark as completed</button>
            </p>
          </div>
        </header>
        {/* <div className={`challenge-item-details ${isExpanded && "expanded"}`}> */}
        <div className="challenge-item-details">
          <p>
            <button onClick={onViewDetails}>
              View Details{" "}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{
                  type: "tween",
                }}
                className="challenge-item-details-icon"
              >
                &#9650;
              </motion.span>
            </button>
          </p>
          <AnimatePresence>
            {/* view detail을 토글했을때 울렁임 방지 */}
            {isExpanded && (
              <motion.div
                variants={{
                  hidden: { height: 0, opacity: 0 },
                  visible: { height: "auto", opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <p className="challenge-item-description">
                  {challenge.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </motion.li>
  );
}
