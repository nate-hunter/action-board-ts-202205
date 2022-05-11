import Card from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

// A `Column` represents a list of `Actions` (`Cards)
// A `Column` with accept the prop `text` which represents the Column's/List's title.

type ColumnProps = {
    text: string;
};

const Column = ({ text }: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <Card text="Create app" />
            <Card text="Create GitHub repo" />
            <Card text="Build some features" />
        </ColumnContainer>
    );
};

export default Column;
