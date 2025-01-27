import Feed from "@components/Feed"

export default function Home() {
    return(
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden"/>
                <span className="orange_gradient text-center"> AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">
                Chatopia is a chat application that allows users to chat with each other in real-time.
            </p>

            <Feed />
        </section>
    )
}