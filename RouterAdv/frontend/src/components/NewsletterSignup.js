import { useFetcher } from "react-router-dom";

import classes from "../css/NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();

  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) window.alert(data.message);
  }, [data, state]);

  return (
    //fetcher.Form는 Form과 다르게 제출 후 라우팅 전환을 하지 않음
    <fetcher.Form
      method="post"
      action="/newsletter"
      //그리고 라우터가 이 컴포넌트의 fetcher.Form가 실행할 액션을 특정지어줘야함
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
