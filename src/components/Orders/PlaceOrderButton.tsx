import Button from '../Button/Button';

type Props = {
    name: 'BUY' | 'SELL';
    isDisabled: boolean;
    setSide: React.Dispatch<React.SetStateAction<'BUY' | 'SELL'>>;
};
export const PlaceOrderButton = ({ name, isDisabled, setSide }: Props) => {
    return (
        <Button
            variant="lg"
            color={name === 'BUY' ? 'success' : 'error'}
            type="submit"
            disabled={isDisabled}
            onClick={() => setSide(name)}
        >
            {name}
        </Button>
    );
};
