import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '..';

describe('Teste para o componente PostComments', () => {
    it('Deve renderizar o botão de comentário', () => {
        render(<PostComments />);
        expect(screen.getByTestId('comment-button')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários quando o formulário é enviado', () => {
        render(<PostComments />);

        fireEvent.change(screen.getByTestId('comment-textarea'), { target: { value: 'Primeiro comentário' } });
        fireEvent.click(screen.getByTestId('comment-button')); // Simula el envío con click

        fireEvent.change(screen.getByTestId('comment-textarea'), { target: { value: 'Segundo comentário' } });
        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getByTestId('comment-0')).toHaveTextContent('Primeiro comentário');
        expect(screen.getByTestId('comment-1')).toHaveTextContent('Segundo comentário');
    });
});
