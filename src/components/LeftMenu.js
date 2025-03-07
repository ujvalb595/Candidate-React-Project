import React from 'react'

export default function LeftMenu() {
  return (
    <div class="sidebar" id="sidebar">
        <a href="/"><i class="fas fa-home"></i> Dashboard</a>
        <a href="/"><i class="fas fa-users"></i> Candidates</a>
        <a href="/"><i class="fas fa-briefcase"></i> Jobs</a>
        <a href="/"><i class="fas fa-cog"></i> Settings</a>
    </div>
  )
}
