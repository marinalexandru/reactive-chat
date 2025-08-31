import { useRef, useState } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

interface SplashScreenAnimationProps {
  onAnimationFinish: () => void;
}

export default function SplashScreenAnimation({ onAnimationFinish }: SplashScreenAnimationProps) {
  const [loopCount, setLoopCount] = useState(0);
  const animationRef = useRef<LottieView>(null);

  const handleAnimationFinish = () => {
    if (loopCount < 4) {
      setLoopCount(loopCount + 1);
      animationRef.current?.play(0);
    } else {
      onAnimationFinish();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LottieView
        ref={animationRef}
        source={require('../../assets/loading-animation.json')}
        autoPlay
        loop={false}
        onAnimationFinish={handleAnimationFinish}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
