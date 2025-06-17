from flask import Flask, request, jsonify, send_file
from pytube import YouTube
from moviepy.editor import AudioFileClip
import os
import uuid

app = Flask(__name__)

@app.route("/api/convert", methods=["POST"])
def convert():
    data = request.json
    url = data.get("url")
    if not url:
        return jsonify({"error": "URL tidak ditemukan"}), 400

    try:
        unique_id = str(uuid.uuid4())
        mp4_path = f"temp/{{unique_id}}.mp4"
        mp3_path = f"temp/{{unique_id}}.mp3"

        yt = YouTube(url)
        stream = yt.streams.filter(only_audio=True).first()
        stream.download(filename=mp4_path)

        audio = AudioFileClip(mp4_path)
        audio.write_audiofile(mp3_path)
        audio.close()
        os.remove(mp4_path)

        return send_file(mp3_path, as_attachment=True)

    except Exception as e:
        return jsonify({{"error": str(e)}}), 500
