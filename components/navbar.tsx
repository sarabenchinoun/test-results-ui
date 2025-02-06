import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Logo } from "./logo";
import { NavLink } from "./nav-link";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
	{ name: "Dashboard", href: "/" },
	{ name: "Screens", href: "/screens" },
];

function Navbar() {
	return (
		<nav
			className="border-gray-200 border-b bg-white"
			aria-label="Main navigation"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 justify-between">
					<div className="flex">
						<div className="flex shrink-0 items-center">
							<Logo className="h-5 w-auto" />
						</div>
						<div className="sm:-my-px hidden sm:ml-6 sm:flex sm:space-x-8">
							{navigation.map((item) => (
								<NavLink key={item.name} href={item.href}>
									{item.name}
								</NavLink>
							))}
						</div>
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:items-center">
						<div className="relative ml-3">
							<div>
								<button
									className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									type="button"
									aria-label="Open user menu"
									aria-haspopup="true"
								>
									<Avatar>
										<AvatarFallback>{user.name.charAt(0) || ""}</AvatarFallback>
										<AvatarImage src={user.imageUrl} alt={user.name} />
									</Avatar>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export { Navbar };
