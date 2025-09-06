interface ISideMenu {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function SideMenu({ isOpen, toggleMenu }: ISideMenu) {
  return (
    <div
      className={`h-screen w-screen fixed top-0 ${
        isOpen ? "right-0" : "right-[-100%]"
      } z-100 transition-all duration-500 flex justify-end backdrop-blur-md`}
    >
      <div className="w-[50%] h-screen bg-purple-600">
        <div className="flex flex-col gap-4 mt-[30px] mx-[30px]">
          <button
            onClick={() => {
              toggleMenu();
            }}
          >
            x
          </button>
          <button>About</button>
          <button>Join Hydra</button>
          <button>Whu build</button>
        </div>
      </div>
    </div>
  );
}
