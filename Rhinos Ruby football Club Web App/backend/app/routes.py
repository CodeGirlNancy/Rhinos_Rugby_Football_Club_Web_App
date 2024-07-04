from flask import request, jsonify, current_app as app
from .models import Player, db

@app.route('/api/players', methods=['GET'])
def get_players():
    players = Player.query.all()
    return jsonify([player.to_dict() for player in players])

@app.route('/api/players', methods=['POST'])
def add_player():
    data = request.get_json()
    new_player = Player(
        name=data['name'],
        position=data['position'],
        matches=data['matches'],
        tries=data['tries'],
        tackles=data['tackles'],
        profile_image=data.get('profile_image', '')
    )
    db.session.add(new_player)
    db.session.commit()
    return jsonify(new_player.to_dict()), 201

def player_to_dict(self):
    return {
        'id': self.id,
        'name': self.name,
        'position': self.position,
        'matches': self.matches,
        'tries': self.tries,
        'tackles': self.tackles,
        'profile_image': self.profile_image
    }

Player.to_dict = player_to_dict


# Existing routes...

@app.route('/api/match-highlights', methods=['GET'])
def get_match_highlights():
    # Fetch match highlights from database or external API
    highlights = [{"id": 1, "title": "Match 1", "video_url": "http://example.com/highlight1.mp4"}]
    return jsonify(highlights)

@app.route('/api/member-zone', methods=['GET'])
def get_member_zone():
    # Fetch exclusive member content
    content = [{"id": 1, "title": "Exclusive Interview", "content": "Video content"}]
    return jsonify(content)

@app.route('/api/training-resources', methods=['GET'])
def get_training_resources():
    # Fetch training resources
    resources = [{"id": 1, "title": "Training Drill 1", "video_url": "http://example.com/drill1.mp4"}]
    return jsonify(resources)

@app.route('/api/calendar-events', methods=['GET'])
def get_calendar_events():
    # Fetch calendar events
    events = [{"id": 1, "title": "Match 1", "date": "2024-07-05"}]
    return jsonify(events)

@app.route('/api/community-programs', methods=['GET'])
def get_community_programs():
    # Fetch community outreach programs
    programs = [{"id": 1, "title": "Youth Program", "details": "Details about the program"}]
    return jsonify(programs)

@app.route('/api/historical-archives', methods=['GET'])
def get_historical_archives():
    # Fetch historical archives
    archives = [{"id": 1, "title": "History 1", "content": "Historical content"}]
    return jsonify(archives)

@app.route('/api/recruitment-info', methods=['GET'])
def get_recruitment_info():
    # Fetch recruitment information
    info = [{"id": 1, "title": "Recruitment 2024", "details": "Details about recruitment"}]
    return jsonify(info)

@app.route('/api/alumni', methods=['GET'])
def get_alumni():
    # Fetch alumni information
    alumni = [{"id": 1, "name": "Alumni 1", "details": "Details about alumni"}]
    return jsonify(alumni)


@app.route('/api/ticket-booking', methods=['POST'])
def book_ticket():
    data = request.json
    # Process ticket booking (e.g., save to database, integrate with payment gateway)
    return jsonify({"status": "success", "message": "Ticket booked successfully"})

@app.route('/api/predictions', methods=['GET'])
def get_predictions():
    # Fetch match predictions from database or external API
    predictions = [{"match_id": 1, "prediction": "Team A will win"}]
    return jsonify(predictions)

@app.route('/api/betting', methods=['GET'])
def get_betting_options():
    # Fetch betting options from external API
    betting_options = [{"match_id": 1, "options": ["Team A", "Team B"]}]
    return jsonify(betting_options)

@app.route('/api/sponsors', methods=['GET'])
def get_sponsors():
    # Fetch sponsorship information
    sponsors = [{"id": 1, "name": "Sponsor 1", "details": "Sponsorship details"}]
    return jsonify(sponsors)

@app.route('/api/match-analysis', methods=['GET'])
def get_match_analysis():
    # Fetch match analysis
    analysis = [{"match_id": 1, "commentary": "In-depth match analysis"}]
    return jsonify(analysis)

@app.route('/api/map', methods=['GET'])
def get_map_locations():
    # Fetch map locations
    locations = [{"id": 1, "name": "Stadium", "coordinates": "123,456"}]
    return jsonify(locations)


@app.route('/api/upload-result', methods=['POST'])
def upload_result():
    data = request.json
    # Here, you would normally save the data to a database
    return jsonify({"message": "Result uploaded successfully!"})

@app.route('/api/results', methods=['GET'])
def get_results():
    results = [
        {"game_id": 1, "team_a": "Team A", "team_b": "Team B", "score": "20-15"},
        {"game_id": 2, "team_a": "Team C", "team_b": "Team D", "score": "25-10"}
    ]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)

