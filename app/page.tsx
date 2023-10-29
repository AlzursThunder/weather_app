import Placeholder from "@/components/Placeholder";
import SearchBar from "@/components/SearchBar";
import UserLocationWeather from "@/components/UserLocationWeather";

export default function Home() {
	return (
		<div>
			<SearchBar />
			<div className="px-1">
				<UserLocationWeather />
				<Placeholder />
			</div>
		</div>
	);
}
