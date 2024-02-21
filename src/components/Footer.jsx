const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center w-full py-4 dark:bg-gray-900 bg-slate-400">
        <img src="#" alt="Logo Disney"/>
        <div className="py-4">
            <nav>
                <ul className="flex flex-wrap gap-4 justify-center items-center text-sm">
                    <li className="hover:underline cursor-pointer">Privacy Policy</li>
                    <li className="hover:underline cursor-pointer">Cookies Policy</li>
                    <li className="hover:underline cursor-pointer">UK & EU Privacy Rights</li>
                    <li className="hover:underline cursor-pointer">Subscriber Agreement</li>
                    <li className="hover:underline cursor-pointer">Help</li>
                    <li className="hover:underline cursor-pointer">Compatible devices</li>
                    <li className="hover:underline cursor-pointer">Who are we?</li>
                    <li className="hover:underline cursor-pointer">Advertisement</li>
                    <li className="hover:underline cursor-pointer">Manage privacy preferences</li>
                </ul>
            </nav>
        </div>
        <p className="text-xs">© Disney. Clone made with 🔥</p>
    </footer>
  )
}

export default Footer