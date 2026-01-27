import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from "antd";

const SearchArea = () => {
    return (
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
            >
                New Item
            </Button>
        </div>
    )
}

export default SearchArea;