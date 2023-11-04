import Menu from "../components/Menu";

export default function LMain({children}){
    return(
        <div>
            <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <Menu />
            </nav>
            <div>
                {children}
            </div>
        </div>
    )
}