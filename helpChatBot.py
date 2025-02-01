from flask import Flask, request, jsonify
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)  # This will allow cross-origin requests from any origin

@app.route('/')
def home():
    return "Hello there! I am FLOW ChatBot.\nHow can I help?"

@app.route('/chatbot', methods=['POST', 'OPTIONS'])
def chatbot():
    if request.method == 'OPTIONS':
        return '', 200  # Handle the preflight OPTIONS request

    user_input = request.json.get('message').lower()  

    payment_keywords = ['payment', 'pay', 'billing', 'transaction']
    signup_keywords = ['sign up', 'signup', 'register', 'create account']
    signin_keywords = ['sign in', 'signin', 'log in', 'login', 'access account']
    booking_keywords = ['book', 'booking', 'ticket', 'reserve']
    destination_keywords = ['destination', 'where to go', 'location', 'place']

    if any(keyword in user_input for keyword in payment_keywords):
        response = ("I'm sorry you're experiencing issues with your payment.\n"
                    "Could you please check the following:\n"
                    "- Make sure your card details are correct and up-to-date.\n"
                    "- Confirm that you have sufficient balance.\n"
                    "- Try using a different payment method if possible.\n"
                    "If the problem persists, let me know the error message you're seeing!")
    
    elif any(keyword in user_input for keyword in signup_keywords + signin_keywords):
        response = ("It seems you're having trouble signing up or signing in.\n"
                    "Please make sure:\n"
                    "- Your email and password are correct.\n"
                    "- Your account is verified via the confirmation email.\n"
                    "- If you forgot your password, try using the 'Forgot Password' option.\n"
                    "Let me know if this helps or if you're seeing a specific error!")

    elif any(keyword in user_input for keyword in booking_keywords):
        response = ("Having trouble booking a ticket?\n"
                    "Please ensure:\n"
                    "- Your payment details are correct.\n"
                    "- The date and time you selected are available.\n"
                    "- Try refreshing the app or website.\n"
                    "If you're still stuck, let me know!")

    elif any(keyword in user_input for keyword in destination_keywords):
        response = ("It looks like you're having trouble determining your destination.\n"
                    "Try the following:\n"
                    "- Use the search bar to type the station or location name.\n"
                    "- Check the map for available routes.\n"
                    "- Make sure the destination is within the service area.\n"
                    "Let me know if you need further assistance!")

    else:
        response = ("I'm not sure I understand your request.\n"
                    "Could you please provide more details or rephrase your question?\n"
                    "I'm here to help with payment issues, sign in/sign up problems, booking, and more!")

    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
