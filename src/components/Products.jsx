import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} className="max-w-full h-auto" />
  </div>
);

const Product = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        
        <div className="absolute -top-40 w-[200px] sm:top-1/2 md:right-[40px] md:left-auto lg:top-20 lg:w-[200px] xl:right-1/5 2xl:right-1/5 hidden sm:block">
          <ImageClipBox
            src="/img/CH02.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/CH02.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="absolute -top-40 w-[200px] sm:top-1/2 md:left-[40px] md:right-auto lg:top-20 lg:w-[200px] xl:left-1/5 2xl:left-1/5 hidden sm:block">
          <ImageClipBox
            src="/img/CH01.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/CH01.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="mb-10 font-general text-[10px] uppercase">
          Les Chroniques prennent forme — choisissez votre destin
          </h2>

          <AnimatedTitle
            title="Collectionnez, jouez, <br /> incarnez le lore <br /> qui vous inspire"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="Deux histoires. À vous de choisir." containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Product;