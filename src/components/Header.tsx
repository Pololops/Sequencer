const Header: React.FC = () => (
  <header>
    <div
      className="
        p-4
        pt-8
        pb-4
        flex
        flex-row
        justify-around
        items-end
        border-b-2
        border-gray-700
      "
    >
      <h1
        className="
          text-4xl 
          font-bold 
          text-center 
          text-transparent 
          bg-clip-text 
          bg-gradient-to-b 
          from-blue-300 
          to-gray-700
        "
      >
        Music Sequencer
      </h1>
      <nav>
        <ul
          className="
            flex 
            flex-row 
            items-center 
            gap-8 
            text-l 
            font-bold 
            [&>li>a]:transition-all 
            [&>li>a]:duration-200
            hover:[&>li>a]:text-white
          "
        >
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
