"""
Profile Sync Service
Generates user cloud profile configs and access endpoints.
"""

from typing import List, Dict, Any


def generate_profile_response(user_id: str, endpoints: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Generates cleaned profile response payload for cloud clients.
    """
    profile_data = {
        "user_id": user_id,
        "status": "active",
        "service_name": "My Cloud Profile",
        "nodes": []
    }

    for endpoint in endpoints:
        profile_data["nodes"].append({
            "name": endpoint.get("name", "Cloud-Node"),
            "host": endpoint.get("host"),
            "port": endpoint.get("port"),
            "type": "channel_engine",
            "access_key": endpoint.get("key")
        })

    return profile_data
