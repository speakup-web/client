import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../../api/userService';
import { AuthContext } from '../../contexts/AuthContext';

export function DeleteButton({ email }) {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await userService.deleteTaskforce(email, auth.accessToken);
            console.log(`Deleted task force with email: ${email}`);
            alert('Taskforce account deleted successfully!');
            navigate(0); // Refresh the page
        } catch (error) {
            console.error('Error deleting task force:', error);
        }
    };

    return (
        <button
            className="w-16 h-10 bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded"
            onClick={handleDelete}
        >
            Delete
        </button>
    );
}