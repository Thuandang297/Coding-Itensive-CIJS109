import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from "antd";
import { useState } from 'react';
import TaskModal from '../TaskModal';

const SearchArea = ({ onAddTask }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSaveTask = (values) => {
        if (onAddTask) {
            onAddTask(values);
        }
        setModalOpen(false);
    };

    return (
        <>
            <div className="search-area flex align-center justify-space-between">
                <div>
                    <Input
                        className='search-input w-max-200'
                        placeholder="Search Items"
                        prefix={<SearchOutlined className="search-icon " />}
                        size="large"
                        allowClear
                    />
                </div>

                <Button
                    type="primary"
                    size="large"
                    className="new-item-btn"
                    onClick={handleOpenModal}
                >
                    New Item
                </Button>
            </div>

            <TaskModal
                open={modalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveTask}
            />
        </>
    )
}

export default SearchArea;