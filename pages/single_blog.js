import Image from "next/image";
import RelatedPost from "../components/RelatedPost/RelatedPost";
import AuthorInfo from "../components/AuthorInfo/AuthorInfo";
import { useState } from "react";
import { data } from "../data/fakePostData";

const CopyLink = () => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handleCopyLink = () => {
    setIsLinkCopied(true);
    navigator.clipboard.writeText(location.href);
  };

  return (
    <div
      className={`w-[30px] h-[30px] cursor-pointer flex justify-center items-center ${
        isLinkCopied ? "bg-[#000000]" : "bg-[#EEEEEE]"
      } rounded-full`}
      onClick={handleCopyLink}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.07292 12.2218L5.34392 12.9463C5.03852 13.2469 4.62718 13.4154 4.19867 13.4154C3.77015 13.4154 3.35881 13.2469 3.05342 12.9463C2.90452 12.7989 2.78632 12.6234 2.70565 12.4299C2.62498 12.2365 2.58345 12.0291 2.58345 11.8195C2.58345 11.6099 2.62498 11.4025 2.70565 11.2091C2.78632 11.0157 2.90452 10.8402 3.05342 10.6927L5.73542 8.0332C6.29072 7.4815 7.33651 6.6697 8.09881 7.4257C8.18085 7.51318 8.27967 7.58323 8.38937 7.63167C8.49907 7.68012 8.61741 7.70597 8.73732 7.70768C8.85723 7.70939 8.97625 7.68692 9.08729 7.64162C9.19832 7.59632 9.2991 7.52912 9.38359 7.44402C9.46809 7.35892 9.53457 7.25767 9.57908 7.14631C9.62359 7.03495 9.6452 6.91577 9.64264 6.79588C9.64007 6.67598 9.61338 6.55783 9.56415 6.44848C9.51493 6.33913 9.44417 6.24081 9.35612 6.1594C8.06192 4.8742 6.14672 5.1118 4.47902 6.7669L1.79702 9.4273C1.48012 9.73973 1.2287 10.1122 1.05748 10.523C0.886256 10.9337 0.79866 11.3745 0.799816 11.8195C0.79871 12.2645 0.886329 12.7053 1.05755 13.116C1.22877 13.5268 1.48016 13.8992 1.79702 14.2117C2.43574 14.8453 3.29947 15.1999 4.19912 15.1981C5.06942 15.1981 5.93972 14.8696 6.60122 14.2117L7.33112 13.4872C7.41435 13.4049 7.48052 13.3069 7.52581 13.199C7.5711 13.091 7.59463 12.9752 7.59505 12.8581C7.59547 12.7411 7.57277 12.6251 7.52825 12.5168C7.48373 12.4085 7.41826 12.3101 7.33562 12.2272C7.16854 12.0597 6.94197 11.9651 6.70538 11.9641C6.46879 11.9631 6.24141 12.0557 6.07292 12.2218ZM14.2017 1.8862C12.8094 0.505604 10.8636 0.430904 9.57662 1.7089L8.66852 2.6107C8.50071 2.77731 8.40597 3.00376 8.40512 3.24022C8.40428 3.47669 8.49741 3.7038 8.66401 3.8716C8.83062 4.03941 9.05707 4.13415 9.29353 4.13499C9.53 4.13584 9.75711 4.04271 9.92492 3.8761L10.8339 2.9752C11.4999 2.3128 12.3738 2.5873 12.9453 3.1525C13.2477 3.454 13.4151 3.8536 13.4151 4.2793C13.4151 4.705 13.2477 5.1046 12.9453 5.4052L10.0833 8.2438C8.77471 9.5407 8.16091 8.9332 7.89901 8.6731C7.81593 8.59061 7.71741 8.52528 7.60907 8.48086C7.50074 8.43644 7.38472 8.41379 7.26763 8.41421C7.15055 8.41463 7.03469 8.43811 6.92668 8.4833C6.81867 8.52849 6.72061 8.59452 6.63811 8.6776C6.55562 8.76069 6.4903 8.85921 6.44587 8.96755C6.40145 9.07588 6.37881 9.1919 6.37922 9.30899C6.37964 9.42607 6.40312 9.54193 6.44831 9.64994C6.4935 9.75795 6.55953 9.85601 6.64261 9.9385C7.24381 10.5343 7.92962 10.8295 8.64782 10.8295C9.52711 10.8295 10.4568 10.3867 11.3415 9.5092L14.2035 6.6715C14.5197 6.35861 14.7706 5.98601 14.9417 5.57536C15.1127 5.1647 15.2004 4.72415 15.1998 4.2793C15.2006 3.83413 15.1128 3.39325 14.9414 2.98238C14.7701 2.57151 14.5186 2.19888 14.2017 1.8862Z"
          fill={isLinkCopied ? "#EEEEEE" : "#333333"}
        />
      </svg>
    </div>
  );
};

const SingleBlogPost = () => {
  return (
    <section className="my-8">
      <div className="flex justify-between max-w-[1200px] mx-auto">
        {/* Author Info */}

        <AuthorInfo info={data.author.info} name={data.author.name} />

        {/* Main Article */}
        <article className="p-6">
          <h1 className="font-semibold text-4xl text-[#333333] capitalize">
            {data.article.title}
          </h1>

          <div className="mt-2 flex justify-between items-center">
            <div className="flex justify-start items-center gap-x-4">
              {/* Author Image */}
              <div className="rounded-full w-[40px] h-[40px] overflow-hidden">
                <Image
                  src={data.author.img}
                  alt={data.author.name}
                  width={40}
                  height={40}
                />
              </div>

              {/* Article Info */}
              <div className="flex justify-center items-start flex-col sm:flex-row sm:items-center sm:gap-3">
                <h2 className="text-[12px] sm:text-[15px] text-[#4879FF] w-fit">
                  {data.author.name}
                </h2>

                <p className="text-[10px] sm:text-[12px] text-[#777777] flex-grow flex justify-start items-center gap-1 sm:gap-x-2">
                  <span>{data.article.published}</span>
                  <span>|</span>
                  <span>{data.article.readTime}</span>
                </p>
              </div>
            </div>

            {/* copy link button */}
            <CopyLink />
          </div>

          {/**
           * Here will be the main contents of the article .
           * I am just adding some garbage content here .
           *
           * TIP:
           *     You can use markdown-to-jsx package to convert markdown to jsx .
           *     Then you can use it to render the content .
           *     markdown-to-jsx : https://www.npmjs.com/package/markdown-to-jsx
           * */}
          <div className="mt-4">
            <Image
              src="/image/corona_virus_big.png"
              alt={data.article.title}
              width={661}
              height={385}
              layout="responsive"
            />

            <div className="mt-4 text-[#555555] text-lg">
              <h1 className="text-[26px] font-semibold text-[#333333] mb-1">
                What is COVID-19?
              </h1>

              <p className="my-2">
                A coronavirus is a kind of common virus that causes an infection
                in your nose, sinuses, or upper throat. Most coronaviruses
                aren&#39;t dangerous.
              </p>

              <p className="my-2">
                In early 2020, after a December 2019 outbreak in China, the
                World Health Organization identified SARS-CoV-2 as a new type of
                coronavirus. The outbreak quickly spread around the world.
              </p>

              <p className="my-2">
                It spreads the same way other coronaviruses do, mainly through
                person-to-person contact. Infections range from mild to deadly.
              </p>

              <p className="my-2">
                In early 2020, after a December 2019 outbreak in China, the
                World Health Organization identified SARS-CoV-2 as a new type of
              </p>

              <h1 className="text-[26px] font-semibold text-[#333333] my-2">
                On two Sides You can put ads
              </h1>

              <p className="my-2">
                The main symptoms include : Fever ,Coughing ,Shortness of breath
                ,Trouble ,reathing ,Fatigue ,Chills, Body aches ,Headache ,Sore
                throat ,runny nose ,Loss of smell or taste ,Nausea ,Diarrhea
              </p>

              <h1 className="text-[26px] font-semibold text-[#333333] my-2">
                Or some related articles{" "}
              </h1>

              <p>
                There&#39;s no way to tell how long the pandemic will continue.
                There are many factors, including the public&#39;s efforts to
                slow the spread, researchers&#39; work to learn more about the
                virus, and the health of the people who are infected.
              </p>

              <h1 className="text-[26px] font-semibold text-[#333333] my-2">
                Or just author info
              </h1>

              <p>
                Unlike the flu, a lot of people aren&#39;t immune to the
                coronavirus because it&#39;s so new. If you do catch it, the
                virus triggers your body to make things called antibodies.
                Researchers are looking at whether the antibodies give you
                protection against catching it again
              </p>
            </div>
          </div>
        </article>

        <aside className="hidden lg:block flex-grow py-6">
          <div className="sticky top-10">
            <h1 className="text-[#333333] text-sm font-semibold mb-2">
              Related
            </h1>

            <div>
              <RelatedPost
                img={"/image/single_post.png"}
                href={"#"}
                text={"How to prevent corona virus & improve health ? "}
              />

              <RelatedPost
                img={"/image/single_post_2.png"}
                href={"#"}
                text={"How much overdose is overdose ?"}
              />

              <RelatedPost
                img={"/image/single_post_3.png"}
                href={"#"}
                text={"Why infection feels like an ant bite ?"}
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SingleBlogPost;
