<?php

namespace App\Policies;

use App\Models\Bike;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class BikePolicy
{
    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Bike $bike): bool
    {
        return $user->id === $bike->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Bike $bike): bool
    {
        return $user->id === $bike->user_id;
    }

}
