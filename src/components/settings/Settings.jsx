import React from 'react';
import {Form, Input, Button, Row, Col} from 'antd';

const Settings = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <Form
            name="registrationForm"
            layout="vertical"
            onFinish={onFinish}
        >
            <Row gutter={16}>
                <Col span={10}>
                    <Form.Item label="Тип" name="type">
                        <Input placeholder="К какой из категорий ниже больше всего подходит ваш объект?"/>
                    </Form.Item>
                </Col>
                <Col span={10}>
                    <Form.Item label="Название" name="name">
                        <Input placeholder="Как называется ваша гостиница?"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={10}>
                    <Form.Item label="Звездность" name="stars">
                        <Input placeholder="Сколько звезд у вашей гостиницы?"/>
                    </Form.Item>
                </Col>
                <Col span={10}>
                    <Form.Item label="Адрес" name="address">
                        <Input placeholder="Где находится ваша гостиница?"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={7}>
                    <Form.Item label="Номер телефона" name="phone">
                        <Input placeholder="Введите номер телефона"/>
                    </Form.Item>
                </Col>
                <Col span={7}>
                    <Form.Item label="Дополнительный номер телефона" name="additionalPhone">
                        <Input placeholder="Введите дополнительный номер телефона"/>
                    </Form.Item>
                </Col>
                <Col span={7}>
                    <Form.Item label="Факс" name="fax">
                        <Input placeholder="Введите факс"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={7}>
                    <Form.Item label="Емаил" name="email">
                        <Input placeholder="Введите email"/>
                    </Form.Item>
                </Col>
                <Col span={7}>
                    <Form.Item label="Email отдела бронирования" name="bookingEmail">
                        <Input placeholder="Введите email отдела бронирования"/>
                    </Form.Item>
                </Col>
                <Col span={7}>
                    <Form.Item label="Почтовый индекс" name="postalCode">
                        <Input placeholder="Введите индекс"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={7}>
                    <Form.Item label="Время заезда" name="checkInTime">
                        <Input placeholder="Например: 08:00"/>
                    </Form.Item>
                </Col>
                <Col span={7}>
                    <Form.Item label="Время выезда" name="checkOutTime">
                        <Input placeholder="Например: 18:00"/>
                    </Form.Item>
                </Col>
                <Col span={7}>
                    <Form.Item label="Форма оплаты" name="paymentMethod">
                        <Input placeholder="Какие способы оплаты вы принимаете?"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={22}>
                    <Form.Item label="Услуги гостиницы" name="services">
                        <Input placeholder="Какие услуги предоставляет ваша гостиница клиентам?"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={22}>
                    <Form.Item label="Ближайшие достопримечательности и развлекательные центры" name="services">
                        <Input placeholder="Ближайшие достопримечательности и развлекательные центры "/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{
                    background: "#ffffff",
                    color: "#000000",
                    padding: "5px 30px",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 10px 29px 5px;"
                }}>
                    Сохранить
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Settings;
