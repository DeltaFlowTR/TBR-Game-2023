interface IRenderable {
    render(context: CanvasRenderingContext2D, deltaTime: number): void;
}

export default IRenderable;
