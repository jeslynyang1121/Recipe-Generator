import chefLogo from "/src/assets/guy.png"

export default function Header() {
    return (
        <header>
            <img className="icon" src={chefLogo} alt="chef-icon" />
            <h1>Chef Claude</h1>
        </header>
    )
}