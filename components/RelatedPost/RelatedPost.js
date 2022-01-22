import Link from "next/link";
import Image from "next/image";

const RelatedPost = ({ img, href, text }) => {
  return (
    <Link href={href} passHref>
      <article className="flex justify-between items-start py-1 pr-1 min-w-[238px] group cursor-pointer border-t border-b">
        <div className="flex-grow w-[42px] h-[42px] overflow-hidden">
          <Image
            src={img}
            width={42}
            height={42}
            layout="responsive"
            alt={"title"}
            className="w-[42px] h-[42px]"
          />
        </div>
        <p className="text-[#555555] text-[12px] max-w-[80%] ml-1 group-hover:text-[#000000] group-hover:underline">
          {text.length > 54 ? `${text.substring(0, 54)}...` : text}
        </p>
      </article>
    </Link>
  );
};

export default RelatedPost;
