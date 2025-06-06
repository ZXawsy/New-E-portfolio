import Spline from '@splinetool/react-spline/next';

export default function SplineParticles({className} : {className?: string}) {
  return (
    <div className={className}>
      <Spline
        scene="https://prod.spline.design/cJBFi5A5PQLj8uY6/scene.splinecode" 
      />
      <div className='absolute bottom-0 h-25 bg-black right-10 w-40'></div>
    </div>
  );
}
