import CustomIcon, { IconType } from './CustomIcon';

const TiktokIcon = (props: IconType) => {
  return (
    <CustomIcon
      {...props}
      svg={({ stroke, color, width, height }) => (
        <svg
          width={width}
          height={height}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          id="tiktok"
        >
          <path
            d="M38.4 21.68V16c-2.66 0-4.69-.71-6-2.09a8.9 8.9 0 0 1-2.13-5.64v-.41l-5.37-.13V30.8a5 5 0 1 1-3.24-5.61v-5.5a10.64 10.64 0 0 0-1.7-.14 10.36 10.36 0 1 0 10.36 10.36 10.56 10.56 0 0 0-.08-1.27v-9.15a14.48 14.48 0 0 0 8.16 2.19Z"
            fill={stroke}
          ></path>
        </svg>
      )}
    ></CustomIcon>
  );
};

export default TiktokIcon;
