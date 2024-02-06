import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Save & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Your Best AI-Prompts</span>
      </h1>
      <p className="desc text-center"> Prompt Wallet is an open-source AI prompt saving tool for anyone to save and share the best prompts</p>

      <Feed />
    </section>
  );
};

export default Home;
