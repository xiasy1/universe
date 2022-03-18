import Discord from "./discord";

export default function MainModule(props) {
    return (
        <main>
            <Discord isLoading={props.isLoading}/>
        </main>
    )
}
