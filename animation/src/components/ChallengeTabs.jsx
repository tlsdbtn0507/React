import Badge from "./Badge.jsx";

import { animate, motion } from "framer-motion";

function Tab({ isSelected, onSelect, badgeCaption, children }) {
  return (
    <li>
      <button
        className={isSelected ? "selected" : undefined}
        onClick={onSelect}
      >
        {children}
        <Badge key={badgeCaption} caption={badgeCaption}></Badge>
        {/* props로 badgeCaption의 변동을 알리지만 framermotion은 변경 감지를 첫페이지 로딩때만 알기 때문에 key로 badgeCaption
        을 주면 숫자가 바뀔때마다 원하는 애니메이션이 적용됨 */}
      </button>
      {isSelected && (
        <motion.div
          layoutId="tab-indicator"
          transition={{ duration: 0.1 }}
          className="active-tab-indicator"
        />
      )}
    </li>
  );
}

export default function ChallengeTabs({
  selectedType,
  onSelectType,
  challenges,
  children,
}) {
  return (
    <>
      <menu id="tabs">
        <Tab
          isSelected={selectedType === "active"}
          onSelect={() => onSelectType("active")}
          badgeCaption={challenges.active.length}
        >
          Active
        </Tab>
        <Tab
          isSelected={selectedType === "completed"}
          onSelect={() => onSelectType("completed")}
          badgeCaption={challenges.completed.length}
        >
          Completed
        </Tab>
        <Tab
          isSelected={selectedType === "failed"}
          onSelect={() => onSelectType("failed")}
          badgeCaption={challenges.failed.length}
        >
          Failed
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
}
