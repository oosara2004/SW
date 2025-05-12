#functional 
import pytest
from helpChatBot import app

@pytest.fixture
def client():
    app.testing = True
    return app.test_client()

def test_home(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b"Hello there!" in response.data

def test_chatbot_payment(client):
    response = client.post('/chatbot', json={"message": "I have a payment issue"})
    assert response.status_code == 200
    assert b"payment" in response.data
