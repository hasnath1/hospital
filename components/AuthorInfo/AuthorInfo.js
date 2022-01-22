const AuthorInfo = ({ name, info }) => {
  return (
    <aside className="hidden lg:block min-w-[238px] max-w-[238px] py-8">
      <div className="px-4 sticky top-10">
        <h1 className="font-semibold text-[#333333] mb-1 text-lg">{name}</h1>
        <p className="text-[13px] text-[#555555]">{info}</p>
      </div>
    </aside>
  );
};

export default AuthorInfo;
