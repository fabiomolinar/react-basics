Components' lifecycle:

Mount => Update => Unmount

For each phase, we have the following hooks (most used ones):
    Mount:
        constructor
        render
        componentDidMount
    Update:
        render
        componentDidUpdate
    Unmount:
        componentWillUnmount