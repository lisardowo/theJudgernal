
type WindowsProps = {
    NombreProyecto: string;
    DescripcionProyecto: string[];
    LinkRepo: string;
}

const Windows: React.FC<WindowsProps>= ({NombreProyecto, DescripcionProyecto, LinkRepo}) => {
    return (
    <>
    <div className = "window">
        <img className = 'img' src = 'src/assets/placeholder.png'></img>
        <div className = "img">
            <div className="Title">
                {NombreProyecto}
            </div>
            <div className = "description">
                 {DescripcionProyecto}
            </div>
            <div className = "LinkRepo">
                 <a className = 'repositorios'href={LinkRepo}>Repositorio</a>
            </div>
        </div>
    </div>
    </>
    );
}

export default Windows;