import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function useDeviceDetect() {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const [isMobile, setMobile] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
    }
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
  }, []);
  return { isMobile };
}
