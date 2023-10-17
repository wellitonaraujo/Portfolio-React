import { useInView } from "react-intersection-observer";
import { AnimatedTextDescriptionWrapper } from "../../pages/Home/styles";

export const AnimatedText = ({ children }: React.PropsWithChildren) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <AnimatedTextDescriptionWrapper ref={ref} isVisible={inView}>
      {children}
    </AnimatedTextDescriptionWrapper>
  );
};