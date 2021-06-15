import React from 'react';
import TemplateList from "../components/TemplateList";

const TemplatePage: React.FC = () => {
    return (
        <div>
            <h1>Список шаблонов</h1>
            <TemplateList />
        </div>
    );
};

export default TemplatePage;
