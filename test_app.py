#functional 
import pytest
from app import app

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

# non functional 
import time

def test_performance(client):
    start = time.time()
    client.get('/')
    duration = time.time() - start
    assert duration < 1.0  
