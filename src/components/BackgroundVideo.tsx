import { useTheme } from 'next-themes';

export const BackgroundVideo = () => {
  const { resolvedTheme } = useTheme();

  if (resolvedTheme === 'dark') {
    return (
      <>
        <video
          src="/test.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-5 absolute top-0 left-0 z-0"
        />
      </>
    );
  }

  return (
    <video
      src="/testwhite.mp4"
      autoPlay
      loop
      muted
      className="w-full h-full object-cover opacity-20 absolute top-0 left-0 z-0 "
    />
  );
};
