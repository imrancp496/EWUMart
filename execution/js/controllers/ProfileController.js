"use strict";

/**
 * ProfileController — profile view + edit form (async save).
 */
class ProfileController {
  static render() {
    const u = AuthController.user;
    const init = u.fname[0] + (u.lname ? u.lname[0] : "");

    Avatar.apply(document.getElementById("pfl-av"), u.id, init);

    // Show/hide the Remove photo button
    const removeBtn = document.getElementById("pfl-av-remove");
    if (removeBtn) removeBtn.style.display = Avatar.get(u.id) ? "" : "none";
    document.getElementById("pfl-name").textContent = u.fname + " " + u.lname;
    document.getElementById("pfl-id").textContent = u.sid || "";
    document.getElementById("pfl-dept").textContent = u.dept;
    document.getElementById("pfl-sem").textContent = u.sem;
    document.getElementById("pfl-email").textContent = u.email;

    document.getElementById("e-fn").value = u.fname;
    document.getElementById("e-ln").value = u.lname || "";
    document.getElementById("e-em").value = u.email;
    document.getElementById("e-dept").value = u.dept;
    document.getElementById("e-sem").value = u.sem;
    document.getElementById("e-bio").value = u.bio || "";

    ProfileController._renderReviews(u.id);
  }

  /** Save profile changes — async API update */
  static async save() {
    const u = AuthController.user;
    const fn = document.getElementById("e-fn").value.trim();
    const ln = document.getElementById("e-ln").value.trim();
    const dept = document.getElementById("e-dept").value;
    const sem = document.getElementById("e-sem").value;
    const bio = document.getElementById("e-bio").value.trim();

    try {
      Loader.show("Saving…");
      const saved = await db.updateUser(u.id, {
        fname: fn,
        lname: ln,
        dept,
        sem,
        bio,
      });
      // Update live session reference
      Object.assign(u, saved);
      const init = fn[0] + (ln ? ln[0] : "");
      Avatar.apply(document.getElementById("nav-av"), u.id, init);
      DashController.render();
      ProfileController.render();
      Toast.show("Profile Saved");
    } catch (e) {
      Toast.show("Failed to save profile!");
    } finally {
      Loader.hide();
    }
  }

  /** Handle avatar file pick — compress, store, rerender everywhere */
  static saveAvatar(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      // Compress to max 200×200 via canvas to keep localStorage light
      const img = new Image();
      img.onload = () => {
        const MAX = 200;
        const ratio = Math.min(MAX / img.width, MAX / img.height);
        const canvas = document.createElement("canvas");
        canvas.width  = img.width  * ratio;
        canvas.height = img.height * ratio;
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.85);

        const u = AuthController.user;
        Avatar.set(u.id, dataUrl);

        // Refresh every avatar location
        const init = u.fname[0] + (u.lname ? u.lname[0] : "");
        Avatar.apply(document.getElementById("nav-av"), u.id, init);
        Avatar.apply(document.getElementById("pfl-av"), u.id, init);
        Avatar.apply(document.getElementById("dh-av"),  u.id, init);

        // Update the preview ring on the profile page
        ProfileController._updateAvatarPreview(dataUrl);

        Toast.show("Profile photo updated! 🎉");
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  }

  /** Update the avatar preview overlay on the profile card. */
  static _updateAvatarPreview(dataUrl) {
    const el = document.getElementById("pfl-av");
    if (!el) return;
    const removeBtn = document.getElementById("pfl-av-remove");
    if (dataUrl) {
      el.textContent = "";
      el.style.backgroundImage = `url('${dataUrl}')`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
      if (removeBtn) removeBtn.style.display = "";
    } else {
      const u = AuthController.user;
      el.style.backgroundImage = "";
      el.textContent = u.fname[0] + (u.lname ? u.lname[0] : "");
      if (removeBtn) removeBtn.style.display = "none";
    }
  }

  /** Remove the current profile photo */
  static removeAvatar() {
    const u = AuthController.user;
    Avatar.remove(u.id);
    const init = u.fname[0] + (u.lname ? u.lname[0] : "");
    Avatar.apply(document.getElementById("nav-av"), u.id, init);
    Avatar.apply(document.getElementById("pfl-av"), u.id, init);
    Avatar.apply(document.getElementById("dh-av"),  u.id, init);
    ProfileController._updateAvatarPreview(null);
    Toast.show("Profile photo removed.");
  }

  static _renderReviews(userId) {
    const el = document.getElementById("pfl-reviews");
    const myRv = db.data.reviews.filter((r) => r.for === userId);

    el.innerHTML = myRv.length
      ? myRv
          .map((r) => {
            const who = db.user(r.by);
            return `
            <div class="rv-item">
              <div class="rv-user">
                ${Avatar.html(who ? who.id : 0, who ? who.fname[0] : "?", "rv-av")}
                <div>
                  <div style="font-weight:500;font-size:13px">${who ? who.fname + " " + who.lname : "Unknown"}</div>
                  <div class="stars" style="font-size:12px">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
                </div>
                <div style="margin-left:auto;font-size:11px;color:var(--text3)">${r.date}</div>
              </div>
              <div class="rv-text">"${r.text}"</div>
            </div>`;
          })
          .join("")
      : '<div style="color:var(--text3);font-size:14px;padding:12px 0">No reviews yet.</div>';
  }
}

const Profile = ProfileController;
